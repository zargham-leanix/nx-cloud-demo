import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib6Demo30Component } from './lib6-demo30.component';

describe('Lib6Demo30Component', () => {
  let component: Lib6Demo30Component;
  let fixture: ComponentFixture<Lib6Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib6Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib6Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

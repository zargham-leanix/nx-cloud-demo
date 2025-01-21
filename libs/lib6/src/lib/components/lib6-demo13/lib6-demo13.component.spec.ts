import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib6Demo13Component } from './lib6-demo13.component';

describe('Lib6Demo13Component', () => {
  let component: Lib6Demo13Component;
  let fixture: ComponentFixture<Lib6Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib6Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib6Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

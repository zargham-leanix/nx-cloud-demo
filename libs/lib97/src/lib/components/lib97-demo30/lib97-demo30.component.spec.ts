import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib97Demo30Component } from './lib97-demo30.component';

describe('Lib97Demo30Component', () => {
  let component: Lib97Demo30Component;
  let fixture: ComponentFixture<Lib97Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib97Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib97Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

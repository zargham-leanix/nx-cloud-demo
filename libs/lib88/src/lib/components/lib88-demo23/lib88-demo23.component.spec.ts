import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib88Demo23Component } from './lib88-demo23.component';

describe('Lib88Demo23Component', () => {
  let component: Lib88Demo23Component;
  let fixture: ComponentFixture<Lib88Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib88Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib88Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

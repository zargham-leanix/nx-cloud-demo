import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib88Demo10Component } from './lib88-demo10.component';

describe('Lib88Demo10Component', () => {
  let component: Lib88Demo10Component;
  let fixture: ComponentFixture<Lib88Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib88Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib88Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

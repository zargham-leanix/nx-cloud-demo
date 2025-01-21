import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib88Demo8Component } from './lib88-demo8.component';

describe('Lib88Demo8Component', () => {
  let component: Lib88Demo8Component;
  let fixture: ComponentFixture<Lib88Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib88Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib88Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib88Demo46Component } from './lib88-demo46.component';

describe('Lib88Demo46Component', () => {
  let component: Lib88Demo46Component;
  let fixture: ComponentFixture<Lib88Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib88Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib88Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

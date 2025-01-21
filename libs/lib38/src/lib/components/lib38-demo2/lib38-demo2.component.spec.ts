import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib38Demo2Component } from './lib38-demo2.component';

describe('Lib38Demo2Component', () => {
  let component: Lib38Demo2Component;
  let fixture: ComponentFixture<Lib38Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib38Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib38Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

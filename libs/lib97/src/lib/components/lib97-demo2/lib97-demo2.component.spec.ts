import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib97Demo2Component } from './lib97-demo2.component';

describe('Lib97Demo2Component', () => {
  let component: Lib97Demo2Component;
  let fixture: ComponentFixture<Lib97Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib97Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib97Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib51Demo2Component } from './lib51-demo2.component';

describe('Lib51Demo2Component', () => {
  let component: Lib51Demo2Component;
  let fixture: ComponentFixture<Lib51Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib51Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib51Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib45Demo2Component } from './lib45-demo2.component';

describe('Lib45Demo2Component', () => {
  let component: Lib45Demo2Component;
  let fixture: ComponentFixture<Lib45Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib45Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib45Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

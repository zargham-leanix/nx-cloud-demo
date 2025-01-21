import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib90Demo17Component } from './lib90-demo17.component';

describe('Lib90Demo17Component', () => {
  let component: Lib90Demo17Component;
  let fixture: ComponentFixture<Lib90Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib90Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib90Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

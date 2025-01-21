import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib95Demo44Component } from './lib95-demo44.component';

describe('Lib95Demo44Component', () => {
  let component: Lib95Demo44Component;
  let fixture: ComponentFixture<Lib95Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib95Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib95Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

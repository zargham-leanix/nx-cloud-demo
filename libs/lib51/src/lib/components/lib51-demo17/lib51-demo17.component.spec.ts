import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib51Demo17Component } from './lib51-demo17.component';

describe('Lib51Demo17Component', () => {
  let component: Lib51Demo17Component;
  let fixture: ComponentFixture<Lib51Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib51Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib51Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

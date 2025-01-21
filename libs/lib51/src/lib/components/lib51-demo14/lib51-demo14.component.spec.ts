import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib51Demo14Component } from './lib51-demo14.component';

describe('Lib51Demo14Component', () => {
  let component: Lib51Demo14Component;
  let fixture: ComponentFixture<Lib51Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib51Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib51Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

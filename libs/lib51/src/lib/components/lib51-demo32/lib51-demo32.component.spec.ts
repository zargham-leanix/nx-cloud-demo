import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib51Demo32Component } from './lib51-demo32.component';

describe('Lib51Demo32Component', () => {
  let component: Lib51Demo32Component;
  let fixture: ComponentFixture<Lib51Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib51Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib51Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

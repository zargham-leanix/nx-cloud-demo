import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib51Demo15Component } from './lib51-demo15.component';

describe('Lib51Demo15Component', () => {
  let component: Lib51Demo15Component;
  let fixture: ComponentFixture<Lib51Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib51Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib51Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

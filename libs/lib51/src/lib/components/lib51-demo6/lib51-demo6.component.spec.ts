import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib51Demo6Component } from './lib51-demo6.component';

describe('Lib51Demo6Component', () => {
  let component: Lib51Demo6Component;
  let fixture: ComponentFixture<Lib51Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib51Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib51Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

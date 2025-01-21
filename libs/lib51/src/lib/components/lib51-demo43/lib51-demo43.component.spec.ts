import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib51Demo43Component } from './lib51-demo43.component';

describe('Lib51Demo43Component', () => {
  let component: Lib51Demo43Component;
  let fixture: ComponentFixture<Lib51Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib51Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib51Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

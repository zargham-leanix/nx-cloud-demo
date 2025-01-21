import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib51Demo42Component } from './lib51-demo42.component';

describe('Lib51Demo42Component', () => {
  let component: Lib51Demo42Component;
  let fixture: ComponentFixture<Lib51Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib51Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib51Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

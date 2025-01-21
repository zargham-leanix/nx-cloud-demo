import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib51Demo48Component } from './lib51-demo48.component';

describe('Lib51Demo48Component', () => {
  let component: Lib51Demo48Component;
  let fixture: ComponentFixture<Lib51Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib51Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib51Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

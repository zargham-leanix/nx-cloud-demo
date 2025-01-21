import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib51Demo35Component } from './lib51-demo35.component';

describe('Lib51Demo35Component', () => {
  let component: Lib51Demo35Component;
  let fixture: ComponentFixture<Lib51Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib51Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib51Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

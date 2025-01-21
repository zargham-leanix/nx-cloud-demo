import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib51Demo29Component } from './lib51-demo29.component';

describe('Lib51Demo29Component', () => {
  let component: Lib51Demo29Component;
  let fixture: ComponentFixture<Lib51Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib51Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib51Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

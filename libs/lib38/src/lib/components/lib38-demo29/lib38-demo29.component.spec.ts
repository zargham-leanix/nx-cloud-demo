import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib38Demo29Component } from './lib38-demo29.component';

describe('Lib38Demo29Component', () => {
  let component: Lib38Demo29Component;
  let fixture: ComponentFixture<Lib38Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib38Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib38Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

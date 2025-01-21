import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib79Demo35Component } from './lib79-demo35.component';

describe('Lib79Demo35Component', () => {
  let component: Lib79Demo35Component;
  let fixture: ComponentFixture<Lib79Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib79Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib79Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

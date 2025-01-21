import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib79Demo11Component } from './lib79-demo11.component';

describe('Lib79Demo11Component', () => {
  let component: Lib79Demo11Component;
  let fixture: ComponentFixture<Lib79Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib79Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib79Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib45Demo11Component } from './lib45-demo11.component';

describe('Lib45Demo11Component', () => {
  let component: Lib45Demo11Component;
  let fixture: ComponentFixture<Lib45Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib45Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib45Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

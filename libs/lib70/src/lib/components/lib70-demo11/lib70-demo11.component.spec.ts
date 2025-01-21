import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib70Demo11Component } from './lib70-demo11.component';

describe('Lib70Demo11Component', () => {
  let component: Lib70Demo11Component;
  let fixture: ComponentFixture<Lib70Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib70Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib70Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

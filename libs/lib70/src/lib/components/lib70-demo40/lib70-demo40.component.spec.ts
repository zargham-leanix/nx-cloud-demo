import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib70Demo40Component } from './lib70-demo40.component';

describe('Lib70Demo40Component', () => {
  let component: Lib70Demo40Component;
  let fixture: ComponentFixture<Lib70Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib70Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib70Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

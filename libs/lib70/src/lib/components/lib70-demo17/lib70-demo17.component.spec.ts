import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib70Demo17Component } from './lib70-demo17.component';

describe('Lib70Demo17Component', () => {
  let component: Lib70Demo17Component;
  let fixture: ComponentFixture<Lib70Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib70Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib70Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

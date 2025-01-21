import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib70Demo32Component } from './lib70-demo32.component';

describe('Lib70Demo32Component', () => {
  let component: Lib70Demo32Component;
  let fixture: ComponentFixture<Lib70Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib70Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib70Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

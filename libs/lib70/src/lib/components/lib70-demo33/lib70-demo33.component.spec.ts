import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib70Demo33Component } from './lib70-demo33.component';

describe('Lib70Demo33Component', () => {
  let component: Lib70Demo33Component;
  let fixture: ComponentFixture<Lib70Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib70Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib70Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

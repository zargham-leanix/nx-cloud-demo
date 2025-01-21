import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib70Demo6Component } from './lib70-demo6.component';

describe('Lib70Demo6Component', () => {
  let component: Lib70Demo6Component;
  let fixture: ComponentFixture<Lib70Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib70Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib70Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

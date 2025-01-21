import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib70Demo15Component } from './lib70-demo15.component';

describe('Lib70Demo15Component', () => {
  let component: Lib70Demo15Component;
  let fixture: ComponentFixture<Lib70Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib70Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib70Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

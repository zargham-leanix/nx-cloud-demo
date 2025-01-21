import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib79Demo15Component } from './lib79-demo15.component';

describe('Lib79Demo15Component', () => {
  let component: Lib79Demo15Component;
  let fixture: ComponentFixture<Lib79Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib79Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib79Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

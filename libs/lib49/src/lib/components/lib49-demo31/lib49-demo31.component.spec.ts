import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib49Demo31Component } from './lib49-demo31.component';

describe('Lib49Demo31Component', () => {
  let component: Lib49Demo31Component;
  let fixture: ComponentFixture<Lib49Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib49Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib49Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

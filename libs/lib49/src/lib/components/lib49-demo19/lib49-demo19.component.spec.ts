import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib49Demo19Component } from './lib49-demo19.component';

describe('Lib49Demo19Component', () => {
  let component: Lib49Demo19Component;
  let fixture: ComponentFixture<Lib49Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib49Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib49Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib65Demo29Component } from './lib65-demo29.component';

describe('Lib65Demo29Component', () => {
  let component: Lib65Demo29Component;
  let fixture: ComponentFixture<Lib65Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib65Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib65Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

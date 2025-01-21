import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib65Demo34Component } from './lib65-demo34.component';

describe('Lib65Demo34Component', () => {
  let component: Lib65Demo34Component;
  let fixture: ComponentFixture<Lib65Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib65Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib65Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

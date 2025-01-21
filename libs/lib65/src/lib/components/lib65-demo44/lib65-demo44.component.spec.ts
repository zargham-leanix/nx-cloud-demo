import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib65Demo44Component } from './lib65-demo44.component';

describe('Lib65Demo44Component', () => {
  let component: Lib65Demo44Component;
  let fixture: ComponentFixture<Lib65Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib65Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib65Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

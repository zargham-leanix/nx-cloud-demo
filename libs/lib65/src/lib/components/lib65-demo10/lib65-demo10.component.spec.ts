import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib65Demo10Component } from './lib65-demo10.component';

describe('Lib65Demo10Component', () => {
  let component: Lib65Demo10Component;
  let fixture: ComponentFixture<Lib65Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib65Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib65Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

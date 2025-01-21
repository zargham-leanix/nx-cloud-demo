import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib65Demo26Component } from './lib65-demo26.component';

describe('Lib65Demo26Component', () => {
  let component: Lib65Demo26Component;
  let fixture: ComponentFixture<Lib65Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib65Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib65Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

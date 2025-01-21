import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib65Demo23Component } from './lib65-demo23.component';

describe('Lib65Demo23Component', () => {
  let component: Lib65Demo23Component;
  let fixture: ComponentFixture<Lib65Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib65Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib65Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

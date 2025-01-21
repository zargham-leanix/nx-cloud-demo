import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib65Demo8Component } from './lib65-demo8.component';

describe('Lib65Demo8Component', () => {
  let component: Lib65Demo8Component;
  let fixture: ComponentFixture<Lib65Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib65Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib65Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

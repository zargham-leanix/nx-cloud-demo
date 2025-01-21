import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib65Demo39Component } from './lib65-demo39.component';

describe('Lib65Demo39Component', () => {
  let component: Lib65Demo39Component;
  let fixture: ComponentFixture<Lib65Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib65Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib65Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib43Demo15Component } from './lib43-demo15.component';

describe('Lib43Demo15Component', () => {
  let component: Lib43Demo15Component;
  let fixture: ComponentFixture<Lib43Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib43Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib43Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

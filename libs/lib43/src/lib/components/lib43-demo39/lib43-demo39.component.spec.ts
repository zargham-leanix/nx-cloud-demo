import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib43Demo39Component } from './lib43-demo39.component';

describe('Lib43Demo39Component', () => {
  let component: Lib43Demo39Component;
  let fixture: ComponentFixture<Lib43Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib43Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib43Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

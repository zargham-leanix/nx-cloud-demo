import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib43Demo10Component } from './lib43-demo10.component';

describe('Lib43Demo10Component', () => {
  let component: Lib43Demo10Component;
  let fixture: ComponentFixture<Lib43Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib43Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib43Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

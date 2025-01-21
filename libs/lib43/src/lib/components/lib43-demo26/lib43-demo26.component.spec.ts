import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib43Demo26Component } from './lib43-demo26.component';

describe('Lib43Demo26Component', () => {
  let component: Lib43Demo26Component;
  let fixture: ComponentFixture<Lib43Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib43Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib43Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

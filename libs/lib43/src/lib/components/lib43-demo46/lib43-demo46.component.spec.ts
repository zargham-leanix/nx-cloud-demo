import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib43Demo46Component } from './lib43-demo46.component';

describe('Lib43Demo46Component', () => {
  let component: Lib43Demo46Component;
  let fixture: ComponentFixture<Lib43Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib43Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib43Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

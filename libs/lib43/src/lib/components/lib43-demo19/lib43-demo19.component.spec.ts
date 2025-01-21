import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib43Demo19Component } from './lib43-demo19.component';

describe('Lib43Demo19Component', () => {
  let component: Lib43Demo19Component;
  let fixture: ComponentFixture<Lib43Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib43Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib43Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib89Demo5Component } from './lib89-demo5.component';

describe('Lib89Demo5Component', () => {
  let component: Lib89Demo5Component;
  let fixture: ComponentFixture<Lib89Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib89Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib89Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

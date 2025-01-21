import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib89Demo23Component } from './lib89-demo23.component';

describe('Lib89Demo23Component', () => {
  let component: Lib89Demo23Component;
  let fixture: ComponentFixture<Lib89Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib89Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib89Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

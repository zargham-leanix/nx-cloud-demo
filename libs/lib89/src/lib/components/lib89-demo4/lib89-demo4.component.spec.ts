import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib89Demo4Component } from './lib89-demo4.component';

describe('Lib89Demo4Component', () => {
  let component: Lib89Demo4Component;
  let fixture: ComponentFixture<Lib89Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib89Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib89Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
